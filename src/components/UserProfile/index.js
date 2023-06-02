import './index.css'

const UserProfile = props => {
  const {userDetails} = props
  const {imgUrl, name, role} = userDetails
  return (
    <li className="user-card-container">
      <img src={imgUrl} className="avatar" alt="avatar" />
      <div className="user-details-container">
        <h4 className="user-name">{name}</h4>
        <p className="user-role">{role}</p>
      </div>
    </li>
  )
}

export default UserProfile
