import Profile from "./Profile";

export default function ProfilesList({ profiles, onDelete }) {
    return (
        <div style={{ display: "flex", gap: "10px" }}>
            {
                profiles.map((profile, index) => <Profile
                    key={index}
                    name={profile.name}
                    imgLink={profile.imgLink + `?${index}`}
                    onDelete={() => onDelete(index)}
                />)
            }
        </div>
    )
}