export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    return {
        props: { arun: data }
    }
}

const Arun = ({ arun }) => {
    return (
        <>
            <div>All Data</div>
            {arun.map(arunkumar => (
                <div key={arunkumar.id}>
                    <h6>Name: {arunkumar.name}</h6>
                    <h6>Username: {arunkumar.username}</h6>
                </div>
            ))}
        </>
    )
}
export default Arun;