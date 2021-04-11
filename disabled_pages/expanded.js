import { Card, Technology } from '.'
export default function Expanded() {
    return (
        <Card
            title="COVID-19 Research"
            id="covid"
            picAlt="Data analysis dashboard I created to study COVID-19 spread"
            picSrc="covid_dashboard.PNG"
            content={
                <>
                    <Technology disableConfetti>JavaScript</Technology>
                    <Technology disableConfetti>React</Technology>
                    <Technology disableConfetti>Data Analysis</Technology>
                    <br /><br />
                    <p>
                        I led a research project on the system dynamics of the global spread of COVID-19, which culminated in a
                        research paper that was published in an Elsevier journal.
                        I developed a data analysis dashboard in JavaScript which the project centered around.
                                </p>
                    <p><a href="https://chaotic-covid19.now.sh/">The Dashboard I created</a> to analyze the data</p>
                    <p><a href="https://doi.org/10.1016/j.chaos.2020.110376">The published paper.</a></p>
                </>
            }
        />
    )
}