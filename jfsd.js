document.getElementById('loanForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const amount = document.getElementById('amount').value;
    const term = document.getElementById('term').value;

    // For demonstration purposes, we'll just log the loan application.
    console.log(`Loan Application - Name: ${name}, Amount: ${amount}, Term: ${term}`);
    alert('Loan application submitted successfully!');
});

document.getElementById('checkStatus').addEventListener('click', function() {
    // Simulated loan status
    const statusMessage = 'Your loan is approved and the amount is disbursed!';
    const statusResult = document.getElementById('statusResult');
    statusResult.innerText = statusMessage;
    statusResult.style.display = 'block'; // Show the status result
});

document.getElementById('makePayment').addEventListener('click', function() {
    const paymentAmount = document.getElementById('paymentAmount').value;
    
    // For demonstration, just logging the payment.
    console.log(`Payment of ${paymentAmount} received.`);
    alert('Payment made successfully!');
});
