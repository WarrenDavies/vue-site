 var app = new Vue({
      el: '#root',
      
      data: {
        tasks: [
          {description: "Finish tutorials" , completed: false },
          {description: "Meditate" , completed: false },
          {description: "Read" , completed: false },
          {description: "Shower" , completed: false },
          {description: "Drink a coffee" , completed: false },
          {description: "Get things ready for work" , completed: false },
        ],
        newTask: "",
      },
      
      methods: {
        addTask() {
          this.tasks.push({description: this.newTask, completed: false});
          this.newTask="";
        },
      },
      
      computed: {
       tasksToDo: function() {
         return this.tasks.filter(comp => !comp.completed);
       },
       tasksDone: function() {
         return this.tasks.filter(comp => comp.completed);
       }
      },

      mounted() {
      
      },

    })