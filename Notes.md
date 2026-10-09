# VUE

## Getting Started/ basics

- Using a plain <header> tag with text inside will be useless as view won’t acknowledge it if it is outside of the ‘app’ id

  '''

    <div id=“app”></div>

'''

- We use {{ greeting }} (as an example) to echo out data associated with the greeting property.
- We set objects inside methods inside a script tag to associate the data to the property being echoed out.
- Can use ‘npx serve’ to create node server to view Vue UI in browser.
- Vue code involves using JavaScript such as ({{ greeting.length }}) to print length of the data property
- In Vue, we can use v-model=“” that creates two-way link between form input element and reactive data property
  - In real world, can be used for live search filter for user names based on instant user input. V-model binds search input directly to app state.
  - V-model commonly used on reactive string variables (these variables are often set using ‘’’ const -variable name here- = ref('') ‘’’. ref is used especially for string values that need to be reactive and change in the UI
- setTimeout(() => {}, ); can be used to update the message after a given time1

## Vue Components

- Can use v-show/ v-if to conditionally render/ displays elements
  - V-if will destroy and recreate the element on demand.
  - V-show will always have the element loaded but just hide/ show it when required. This can be seen clearer using inspect element
  - These attributes can be used within tags such as sections to hide/ show content such as lists/ arrays. These attributes can be used to seemingly add/ remove items from one list to another.
- Can use import attributes to put the app javascript module in another file separate from the UI content.
- Can use the Vue.js chrome extension to specifically see Vue component code.
- Standard practise to have all code in their appropriate files, such as having the AppButton line in an App.js file, and having the main component code in an AppButton.js file.
- Vue uses props (properties) to pass down data from parent to child components.
- Props can be used to define expected data types and set fallback default values
- Props are useful for:
  - making components reusable; same UI elements with different data.
  - Clear data flow; parent to child, easier to track origin of data changes
  - Data validation; Vue enables defining of expected types, requirements and default fallback values for props for catching bugs early

## Event Handling

- During form submission, the data on screen will refresh automatically. We can turn this off by using @submit.prevent
- We can set responsive alerts that populate with the form data after submission
- Without setting the variable for the form fields to an empty string, the form data will remain populated. This empty value means that the form field resets to being blank after form submission (newAssignment: ‘’,).
- Parent communicates to child through props. The child communicates to parent through emitting events.
- Using @add="add" means that the parent component listens for fired events when form submitted, calls its own ‘add’ method which then sends the submitted data to the array list (assignments list from tutorial)

## Beyond the Basics

- Can echo out length of array lists in a span tag to display dynamic view of number of items in that array.

  '''
     <h2><span>({{ assignments.length }})</span></h2> 
    '''

- Set is used to create a set of items where each item must be unique. This helps us in this tutorial to create a unique set of tags for categories of assignments.
- Must use the Computed property whenever displaying value that depends on other reactive data
  - In the tutorial, the ‘tags’ are way better to use in computed property as it is based off a calculation of what tags exist and what tag is selected by the user. Both of these values can change, therefore can give a different Computed values.
  - Rule of thumb: if a value is calculated from other data (not just equal to it), use computed instead of a method or storing it separately as data. This applies whether that data is hardcoded or entered by the user in UI.
  - The Vue template will cache the results between renders until the calculated values change.
  - Real wold scenarios requiring the Computed property:
    - E-commerce: cart calculations
    - Forms: multiple field validation checks
    - Admin: summary stats calculations, ‘overdue’ task flags
    - Social Media: showing likes as 12 vs 99+
- The Set class (built-in JS class)
  - Main use is for deduplication
  - Using ‘new Set(..array code..) creates a Set object
  - Using ‘…’ with the Set class ‘...new Set(array)’ spreads the Set values as individual comma-separated values.
  - Using ‘[...new Set(array)]’ | ‘…’ spreads the values out, ‘Set’ dedupes data and ‘[ array brackets ]’ keeps it within array (collection of values)

## using V-model=“”

- allows input to be changed via UI as well as inspect element
- Binds the value and listens for when the value changes.
- V-model is used anywhere you need two-way data binding.
- Can use v-model on any element/ component that can hold a value, not just text inputs
  - Checkboxes - single bool or array/Set
  - Radio buttons- select one value from a group
  - Select dropdown- single/ multiple selection
  - Textarea/ text input

## Lifecycle Hooks

- Vue components follow a lifecycle from creation to removal. It maps out the different stages for a component.
- https://vuejs.org/guide/essentials/lifecycle

* Renderer encounters component: Vue finds a component to build
* setup (Composition API) / beforeCreate: earliest hooks, runs before much exists yet
* Init Options API: Vue sets up data, props, methods
* created: component data is ready, but not yet on the page
* Has pre-compiled template?: Vue checks if the template is already converted to render code
  - No: compiles it on the fly
  - Yes: skips straight ahead
* beforeMount: right before Vue inserts the component into the DOM
* initial render: Vue creates and inserts the actual HTML
* mounted: component is now live on the page.Then it enters a loop while running:
* Mounted: (steady state)
* when data changes: triggers beforeUpdate → re-render and patch → updated
* This loop repeats every time reactive data changesFinally, when removed:
* beforeUnmount: right before removal
* Unmounted: component is destroyed

- Using created() { fetch() }, returns a promise which is an object that represents a value that may not be available yet.
- Can use:

‘’’
npx json-server db.json -p 3001
‘’’

to create a fake API server to connect to a file with an array to fetch data from.

## Mixins

- Mixins is a pattern used to reuse bundles of code (part of optional API) but is replaced by using composables (part of composition API) due to code origin and tracking becoming clearer.
- Reusing code
  - Create composable
  - Import it
  - Use it

## Refactor to defineProps and defineEmits

- Using @keydown
  - Can listen for keyboard keys entered in UI
  - Can stack on top of that method such as using @keydown.tab.prevent which listens for the Tab key being pressed, prevents default actions from that key (such as navigating to next button for Tab key)

### defineProps

- declares incoming data passed (down) from parent - child component.
  - lets child components receive and display data sent by parent component.
  - child component sets the rules (blueprint) of the prop (child components acts as a class declaration model that sets the rules and requirements for any variables it contains.)
  - parent component creates data that abides (construction) by the rules of the prop/'class', using the variables used in the prop and just assigning data to it.

#### Example of child component creating prop in style of class declaration

// Think of the Child Component like a Class definition
class UserCard {
constructor(name, age = 18) { // Default value set here
this.name = name; // Type: String expected
this.age = age; // Type: Number expected
}
}

#### Example of parent component instantiating the prop in style of a 'class'

// Think of the Parent Component like instantiating the class
const user1 = new UserCard("Alice", 25);
const user2 = new UserCard("Bob"); // Uses default age of 18

### defineEmits

- allows child components to announce the status of events (e.g. button click/ form submission) that the user has initiated for the parent component to listen for (e.g. user has clicked delete-button, triggering a delete item from shopping cart action)
