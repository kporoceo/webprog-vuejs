const app3 = Vue.createApp({
    data() {
      return {
        itemName: '', // Initialize as an empty string
        itemNumber: 0, // Initialize as zero
        itemImportant: false, // Initialize as false
        shoppingList: [
          { name: 'Tomatoes', number: 5, important: false, found: false },
          { name: 'Bread', number: 1, important: false, found: false },
          { name: 'Soap', number: 1, important: true, found: true }
        ]
      }
    },
    methods: {
      addItem() {
        if (!this.itemName || this.itemNumber <= 0) {
          alert('Please provide a valid item name and number!');
          return;
        }
        let item = {
          name: this.itemName,
          number: parseInt(this.itemNumber), // Ensure number is an integer
          important: this.itemImportant,
          found: false
        };
        this.shoppingList.push(item);
        // Reset the form fields
        this.itemName = '';
        this.itemNumber = 0;
        this.itemImportant = false;
      }
    }
  });
  app3.mount('#app3');
  