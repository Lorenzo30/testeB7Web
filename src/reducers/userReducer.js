const initialState = {
    name:'',
    workoutDays:[], // 1-7
    level:'', // beginner, intermediate, advanced
    lastWorkout:'', // hash
    myWorkouts:[],
    dailyProgress:['2019-10-02', '2019-10-03'],
    horarioTreino:new Date()
  };
  
  export default (state = initialState, action) => {
    let dailyProgress = [...state.dailyProgress];
    let myWorkouts = [...state.myWorkouts];
  
    switch (action.type) {
      case 'SET_NAME':
        return {...state, name:action.payload.name};
        break;
      case 'SET_WORKOUTDAYS':
        return {...state, workoutDays:action.payload.workoutDays};
        break;
      case 'SET_LEVEL':
          return {...state,  level:action.payload.level};
      break;  
      case 'SET_HORARIO_TREINO':
          return {...state,  horarioTreino:action.payload.horarioTreino};
      break;  
    }
  
    return state;
  };