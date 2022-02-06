import quizimg from '../../images/quiz.png'
import tenziesimg from '../../images/tenzies.png'
import notesimg from '../../images/notes.png'

export default function Home () {
    return(
        <div className="home">
            <div className="heading">
                <a href="/mypf/quiz">
                    <img className='main-img' src={quizimg} alt={quizimg} />
                </a>
                <a href="/mypf/tenzies">
                    <img className='main-img' src={tenziesimg} alt={tenziesimg} />
                </a>
                <a href="/mypf/notes">
                    <img className='main-img' src={notesimg} alt={notesimg} />
                </a>
            </div>
            <div className="heading">
                react JS
            </div>
        </div>
    )
}