import UserProfile from './components/UserProfile'
import './App.css'

const userDetails = [
  {
    uniqueNo: 0,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Ujjwal Jha',
    role: 'Frontend Developer',
  },
  {
    uniqueNo: 1,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/floyd-miles-img.png',
    name: 'Emma Bostian',
    role: 'Frontend Developer',
  },
  {
    uniqueNo: 2,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/jacob-jones-img.png',
    name: 'Emilia Clark',
    role: 'Frontend Developer',
  },
  {
    uniqueNo: 3,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/devon-lane-img.png',
    name: 'John Hoffman',
    role: 'Frontend Developer',
  },
]

const App = () => (
  <div className="list-container">
    <h1 className="title">User List</h1>
    <ul>
      {userDetails.map(eachItem => (
        <UserProfile userDetails={eachItem} key={eachItem.uniqueNo} />
      ))}
    </ul>
  </div>
)
export default App
