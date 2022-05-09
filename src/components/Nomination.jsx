import { useEffect } from "react"
import toast from "react-hot-toast"

export default function Nomination({ nominations, removeNomination }) {
  const notify = () =>
    toast.success("5 nominations added", {
      duration: 4000,

      style: {
        fontWeight: "bold",
        textTransform: "uppercase",
        fontSize: "10px"
      }
    })

  const notifyRemoval = () => {
    toast.error("Nomination removed", {
      duration: 2000,
      style: {
        fontWeight: "bold",
        textTransform: "uppercase",
        fontSize: "10px"
      }
    })
  }

  useEffect(() => {
    const sendNotification = () => notify()

    nominations.length === 5
      ? sendNotification()
      : `it is just ${nominations.length} nominations right now`
  }, [nominations.length])

  return (
    <div className="nomination">
      <p className="nomination__title">Nomination</p>
      <ul className="nominations">
        {nominations.map((nominee, id) => (
          <li className="nominations__item" key={nominee.imdbID}>
            {nominee.Title} ({nominee.Year}) {id}
            <button
              onClick={() => {
                removeNomination(id)
                notifyRemoval()
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
