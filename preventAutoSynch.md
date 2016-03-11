#Preventing auto-synchronization of your Model Data and your Database

##Table of Contents
###Preventing auto-synchronization of your Model Data and your Database
###Problem
###Explanation
###Recommendation
###Recommended User Flow

##Problem:
When A user enters invalid data into an input text box, the invalid data entered should NOT be synchronized automatically to the database.

##Explanation:
Occasionally, A developer might have the need to prevent the data from auto synchronizing directly from the user's browser into a database.
This need will only come up with components that have an "edit" functionality, such as the Data Table (px-data-table).
An example for such as event could be when a user updates a field with invalid data (letters where numbers are expected, etc).
In such a case, the user will be presented with visual cues, telling them that the data entered is invalid. The user can then hit escape to revert back to the previous data, or correct their data.
While the data is invalid, the developer should block automatic synchronization, since they likely do not want invalid data stored in the database.

##Recommendation:
While the data is in error state, unless you WANT incorrect data to be synchronized to the database (and if you're reading this, that's probably not what you want), a barrier should be set up between the data model on the browser, and what's sent back to the database itself.
Because of the nature of data binding in Polymer, there is no way to stop the data entered into a text field from synching with the model object that sits on the front-end. This means the data barrier should be set up at
the end point connecting your model data on the front-end with the database itself.
We recommend that a barrier be set up, preventing automatic synchronization of your model data with your database, and optionally adding an action component - such as a "Save" button - on the page. This allows for the data to only be synchronized when requested by the user - not automatically.

##Recommended User Flow: 
1. User enters text into a text box.
2. Text is invalid.
3. User is presented with visual indicators, letting them know their data is invalid.
4. In the background, the data IS synchronized between the input text and your model (Polymer does this automatically), BUT NOT with your database.
5. The user tries saving the data by clicking on the above mentioned "Save" button, and is presented with a message, explaining that a save is not possible while invalid data is present.
6. User fixes data.
7. User clicks the "Save" button.
8. Data is synchronized between the model and the Database.
9. OPTIONAL. Auto-synchronization CAN be set up, even without a save button in place - the key with such a scenario is to ensure data validity every time auto-synchronization happens - if the data is invalid, no synchronization happens. At that point, it's up to the developer to make sure the user knows the data has NOT been saved - because the data is invalid - but it WILL be saved again once the data is fixed.
