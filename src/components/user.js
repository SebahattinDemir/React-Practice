import PropTypes from "prop-types";

function User({ name, surname, isLoggedIn, age, friends, adress }) {

    if(!isLoggedIn){
        return <div>
            Giriş Yapmadınız.
        </div>
    }
    
    return (
        <>
        <h1>
            {`${name} ${surname} (${age})`}
        </h1>
        {adress.title} {adress.zip}

        {friends.map((friend) => (
            <div key={friend.id}>
               {friend.name}
            </div>
        ))}
        </>
    );
}

User.propTypes = {
    name: PropTypes.string,
    surname: PropTypes.string,
    isLoggedIn: PropTypes.bool,
    age: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
    friends: PropTypes.array,
    adress: PropTypes.shape({
        title: PropTypes.string,
        zip: PropTypes.number,
    }),

};

export default User;






