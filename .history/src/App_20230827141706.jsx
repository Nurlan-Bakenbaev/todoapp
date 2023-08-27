function App() {
  const style = {
    bg: `h-screen w s-screen p-4 bg-gradient-to-r from-[#ff45e6] to-[#ff7445]`,
  };
  return (
    <div className={style.bg}>
      <div className={style.container}>
     <div className={style.heading}>
      <form className={style.form}>
        <input type="text"placeholder="Add to" />
      </form>
     </div>
      </div>
    </div>
  );
}

export default App;