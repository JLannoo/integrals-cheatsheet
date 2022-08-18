import "./Integrals.css";
import json from "./Integrals.json";
import Latex from "react-latex";

export default function Integrals(){
    const getURLIntegral = (integral) => {
        return `int+${integral}+dx`;
    }

    return (
        <>
            <div className="integrals-title">
                <h3>Let <i>x</i> be a variable, C and a arbitrary constants:</h3>
            </div>
            <main className="integrals">
                {json.map((integral , index) => (
                    <div className="integral" key={index}>
                        <Latex displayMode>{`$$${index+1}. \\int ${integral.input} dx = ${integral.output} + C$$`}</Latex>
                        <div className="links">
                            <a title="Search in WolframAlpha" ref="nonreferrer" target="_blank" href={`https://www.wolframalpha.com/input?i=${getURLIntegral(integral.input)}`}>
                                <img className="logo wolfram" src="/WolframAlpha.svg" alt="Link to integral in WolframAlpha" />
                            </a>
                            <a title="Search in WolfreeAlpha" ref="nonreferrer" target="_blank" href={`https://wolfreealpha.github.io/input?i=${getURLIntegral(integral.input)}&lang=en&wolfree_input=${getURLIntegral(integral.input)}&wolfree_i2d=&wolfree_podstate=`}>
                                <img className="logo wolfree" src="/WolframAlpha.svg" alt="Link to integral in WolframAlpha" />
                            </a>
                        </div>
                    </div>
                ))}
            </main>
        </>
    )
}
