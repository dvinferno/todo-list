const TodayDate = () => {
    const getCurrentDate = () => {
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const today = new Date();
      return today.toLocaleDateString('en-US', options);
    };
  
    return (
      <div className="date">
        <p>{getCurrentDate()}</p>
      </div>
    );
  };
  
  export default TodayDate;