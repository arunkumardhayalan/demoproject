import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import ChartsNew from './components/ChartsNew';
import Card from './components/Card';
// import './tokens.json'

function App() {
  return (<div className="App" >

    <button type='button' className='global-bg-primary-tokens bg-clr' > Arun btn </button>
    <h6 className='underline' > Underline </h6>
    <h1 class="text-3xl font-bold underline" >Hello world!</h1>
    { /* <Arun /> */} { /* <ChartsNew/> */} {
      /* <ul>
              {["first", "second"].map((item) => (
                <li>{item}</li>
              ))}
            </ul> */
    } {
      /* <ul>
              {arrayOfMessageObjects.map(({ id, ...message }) => (
                <Message key={id} {...message} />
              ))}
            </ul> */
    }

    <Card label="Yeah Its me" />

    <Card Pg_clr="#000"
      backgroundColor="#ddd"
      border="1px solid "
      borderBottomRightRadius="5px"
      borderBottomleftRadius="5px"
      borderTopLeftRadius="5px"
      borderTopRightRadius="5px"
      bordercolor="#000000"
      btn_bg_color="#000"
      btn_borderBottomLeftRadius="8px"
      btn_borderBottomRightRadius="8px"
      btn_borderTopLeftRadius="8px"
      btn_borderTopRightRadius="8px"
      btn_color="#fff"
      color={
        {}}
      header_clr="red"
      label="Yeah Its me"
      padding="15px" />


  </div>
  );
}

export default App;
