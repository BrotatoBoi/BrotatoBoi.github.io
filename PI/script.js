
// Permissions to get from user.
const scopes = ['payments'];

// There is something in the SDK about this, plz read it!
function onIncompletePaymentFound(payment) {
    console.log('There must have been an incomplete payment!');
}

Pi.authenticate(scopes, onIncompletePaymentFound).then(function(auth) {
    console.log('Hey! You may now purchase something!');
}).catch(function(error){
    console.error(error);
});
