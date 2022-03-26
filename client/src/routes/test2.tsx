import { useState } from "react";
import useTypingGame, {
    CharStateType,
    PhaseType
} from "react-typing-game-hook";
import "./styles.css";
import Results from './results'
let Color = require('color');

const TypingGameDemo = () => {

    const [wordCount, setWordCount] = useState(0)
    let text = "The quick brown fox jumps over the lazy dog";
    const countWords = (str) => {
        const spaceArray = str.split('').filter(a => a === ' ')
        setWordCount(spaceArray.length + 1)
        return wordCount

    }

    const {
        states: {
            charsState,
            length,
            currIndex,
            currChar,
            correctChar,
            errorChar,
            phase,
            startTime,
            endTime,

        },
        actions: { insertTyping, resetTyping, deleteTyping, getDuration }
    } = useTypingGame(text, {
        skipCurrentWordOnSpace: true,
        pauseOnError: false,
        countErrors: 'everytime',
    });

    const handleKey = (key: any) => {
        // if (PhaseType[phase] === 'Started' && key === ' ') {
        //     setWordCount(wordCount + 1)
        //     console.log(wordCount)

        // }
        if (key === "Escape") {
            resetTyping();
            return;
        }
        if (key === "Backspace") {
            deleteTyping(false);
            return;
        }
        if (key.length === 1) {
            insertTyping(key);
        }
    };

    return (
        <div className="h-full  max-w-screen">
            <h1>React Typing Game Hook Demo</h1>
            <p>Click on the text below and start typing (esc to reset)</p>
            <div
                className="typing-test"
                onKeyDown={(e) => {
                    handleKey(e.key);
                    e.preventDefault();
                }}
                tabIndex={0}
            >
                {text.split("").map((char: string, index: number) => {
                    let state = charsState[index];
                    let color =
                        state === CharStateType.Incomplete
                            ? Color('#000000').alpha(0.65)
                            : state === CharStateType.Correct
                                ? Color('#000000')
                                : "red";
                    return (
                        <span
                            key={char + index}
                            style={{ color }}
                            className={currIndex + 1 === index ? "curr-letter" : ""}
                        >
                            {char}
                        </span>
                    );
                })}
            </div>
            <pre>
                {JSON.stringify(
                    {
                        startTime,
                        endTime,
                        length,
                        currIndex,
                        currChar,
                        correctChar,
                        errorChar,
                        phase: PhaseType[phase]
                    },
                    null,
                    2
                )}
            </pre>
            {/* {PhaseType[phase] === 'Ended' && (<Results speed={Math.round((length) / (endTime - startTime) * 1000 * 60)} accuracy={Math.round((correctChar / (correctChar + errorChar)) * 100)} />)} */}
            <Results speedClass={PhaseType[phase] === 'Ended' ? 'flex' : 'hidden'} wordsTyped={Math.round(wordCount / (getDuration()) * 1000 * 60)} accClass={PhaseType[phase] !== 'NotStarted' ? 'flex' : 'hidden'} speed={Math.round((currIndex + 1) / (getDuration()) * 1000 * 60)} accuracy={Math.round((correctChar / (correctChar + errorChar)) * 100)} errors={errorChar} />
            {/* {console.log(length, endTime - startTime)} */}
        </div>
    );
};

export default TypingGameDemo;
