'use client'
import { generateQuiz, saveQuizResult } from "@/action/interview";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import useFetch from "@/hooks/use-fatch";
import { useEffect, useState } from "react";
import { BarLoader } from "react-spinners";
import { toast } from "sonner";
import QuizResult from "./QuizResult";

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [showExplanation, setShowExplanation] = useState(false);

    const {
        loading: generatingQuiz,
        fn: generateQuizFn,
        data: quizData,
    } = useFetch(generateQuiz);

    const {
        loading: savingResult,
        fn: saveQuizResultFn,
        data: resultData,
        setData: setResultData,
    } = useFetch(saveQuizResult);

    console.log("hi",resultData)

    useEffect(() => {
        if (quizData) {
            setAnswers(new Array(quizData?.length).fill(null))
        }
    }, [quizData])

    const handleAnswer = (answer) => {
        const newAnswers = [...answers];
        newAnswers[currentQuestion] = answer;
        setAnswers(newAnswers);
    };

    const handleNext = () => {
        if (currentQuestion < quizData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setShowExplanation(false);
        } else {
            finishQuiz();
        }
    };

    const calculateScore = () => {
        let correct = 0;
        answers.forEach((answer, index) => {
            if (answer === quizData[index].correctAnswer) {
                correct++;
            }
        });
        return (correct / quizData.length) * 100;
    };

    const finishQuiz = async () => {
        const score = calculateScore();;
        try {
            await saveQuizResultFn(quizData, answers, score);
            toast.success("Quiz completed successfully")

        } catch (error) {
            toast.error("Failed to save quiz result")

        }
    }

    const startNewQuiz = () => {
        setCurrentQuestion(0);
        setAnswers([]);
        setShowExplanation(false);
        generateQuizFn();
        setResultData(null);
    };

    if (generatingQuiz) {
        return <BarLoader className="mt-4" width={"100%"} />
    }

    // Show results if quiz is completed
    if (resultData) {
        return (
            <div className="mx-2">
                <QuizResult result={resultData} onStartNew={startNewQuiz} />
            </div>
        );
    }

    if (!quizData) {
        return (
            <Card className="my-10 bg-white/20 backdrop-blur-md">
                <CardHeader>
                    <CardTitle>Ready To Test Your Knowledge?</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">
                        This quiz contains 10 questions specific to your industry and
                        skills. Take your time and choose the best answer for each question.
                    </p>
                </CardContent>
                <CardFooter>
                    <Button onClick={generateQuizFn} className="w-full cursor-pointer">Start Quiz</Button>
                </CardFooter>
            </Card>
        )
    }

    const question = quizData[currentQuestion];

    return (
        <>

            <Card className="my-10 bg-white/20 backdrop-blur-md">
                <CardHeader>
                    <CardTitle  >Question {currentQuestion + 1} of {quizData.length}</CardTitle>
                </CardHeader>
                <CardContent >
                    <p className="text-lg font-medium my-4">
                        {question.question}
                    </p>

                    <RadioGroup
                        className="space-y-2f"
                        onValueChange={handleAnswer}
                        value={answers[currentQuestion]}
                    >
                        {question.options.map((option, index) => (
                            <div className="flex items-center space-x-2" key={index}>
                                <RadioGroupItem className="  border-2 border-black cursor-pointer" value={option} id={`option-${index}`} />
                                <Label htmlFor={`option-${index}`}>{option}</Label>
                            </div>
                        ))}
                    </RadioGroup>
                </CardContent>
                {showExplanation &&
                    <div className="mt-4 p-4 bg-black max-w-7xl mx-auto text-white rounded-lg ">
                        <p className="font-medium">Explanation :</p>
                        <p className="text-muted-foreground">{question.explanation}</p>
                    </div>
                }
                <CardFooter>
                    <Button
                        onClick={() => setShowExplanation(true)}

                        disabled={!answers[currentQuestion]}
                    >
                        Show Explanation
                    </Button>

                    <Button
                        onClick={handleNext}
                        disabled={!answers[currentQuestion] || savingResult}
                        className="ml-auto cursor-pointer"
                    >
                        {savingResult && (
                            <BarLoader className="mt-4" width={"100%"} color="gray" />
                        )}
                        {currentQuestion < quizData.length - 1
                            ? "Next Question"
                            : "Finish Quiz"}
                    </Button>

                </CardFooter>
            </Card>
        </>
    )
}

export default Quiz
