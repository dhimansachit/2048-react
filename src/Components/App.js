import GameController from "./controller"
import "../CSS/styles.css"
import "../CSS/App.css"
import langCommon from "../lang/langCommon"

export default function App() {
  function newgame() {
    window.location.reload(true)
  }

  return (
    <div className='App p-5 rounded'>
      <GameController />
      <button
        title={langCommon.NEW_GAME}
        onClick={newgame}
        className='btn btn-lg btn-danger p-3 m-4'
      >
        New Game
      </button>
    </div>
  )
}
