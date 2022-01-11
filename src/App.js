import './App.css';
import './sorting';

function App() {

  var todaysActivities = [
    {
        id: 1,
        title: "Go for a run",
        time: "Mid-day"
    },
    {
        id: 2,
        title: "Learn Spanish",
        time: "Mid-day"
    },
    {
        id: 3,
        title: "Workout",
        time: "Morning"
    },
    {
        id: 4,
        title: "Practice writing",
        time: "Mid-day"
    },
    {
        id: 5,
        title: "Prepare for school",
        time: "Morning"
    },
    {
        id: 6,
        title: "Meditate",
        time: "Evening"
    },
    {
        id: 7,
        title: "Track calories",
        time: "Evening"
    },
    {
        id: 8,
        title: "Read 10 pages",
        time: "Evening"
    },
  ];

  var morningActivities = [];
  var middayActivities = [];
  var eveningActivities = [];

  function sortByTime(i) {
    switch(todaysActivities[i].time) {
      case "Morning":
        morningActivities.push(todaysActivities[i]);
        break;
      case "Mid-day":
        middayActivities.push(todaysActivities[i]);
        break;
      case "Evening":
        eveningActivities.push(todaysActivities[i]);
        break;
    }
    if (todaysActivities[i+1] != null) {
      sortByTime(i+1);
    }
  }

  function dynamicSort(property) {
    var sortOrder = 1;

    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }

    return function (a,b) {
        if(sortOrder == -1){
            return b[property].localeCompare(a[property]);
        }else{
            return a[property].localeCompare(b[property]);
        }        
    }
  }

  sortByTime(0);

  morningActivities.sort(dynamicSort("title"));
  middayActivities.sort(dynamicSort("title"));
  eveningActivities.sort(dynamicSort("title"));

  todaysActivities = [...morningActivities, ...middayActivities, ...eveningActivities];

  return (
    <div className="App">
      <header className="App-header">
        {todaysActivities.map(todaysActivities => {
          return (
            <div key={todaysActivities.id} className="container-card">
              <h4>{todaysActivities.title}</h4>
              {todaysActivities.time}
            </div>
          )
        })}
      </header>
    </div>
  );
}

export default App;
