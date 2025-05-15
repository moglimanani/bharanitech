<!-- resources/views/emails/contact.blade.php -->
<html>

<body>
    Hi Ezhumalai,
    <br><br>
    <h3>You’ve received a new message through your website BaraniTech contact form. Here are the details:</h3>
    <p><strong>Name:</strong> {{ $contact->username }}</p>
    <p><strong>Email:</strong> {{ $contact->email }}</p>
    <p><strong>Phone:</strong> {{ $contact->phone ?? 'N/A' }}</p>
    <p><strong>Occupation:</strong> {{ $contact->occupation }}</p>
    <p><strong>Date of Birth:</strong> {{ $contact->dob }}</p>
    <p><strong>Subject:</strong> {{ $contact->subject }}</p>
    <p><strong>Message:</strong></p>
    <p>{{ $contact->message }}</p>
</body>

</html>
