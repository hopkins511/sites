<link rel="stylesheet" type="text/css" href="css/styles2.css">

<?php 
$name = $_POST['name'];
$request = $_POST['request'];

$to = "hopkins511@yahoo.com";
$subject = "Tutuorial Rquest";
$body = "This is an automated message. Please don't reply to this email. \n\n $request";
    
mail ($to,$subject,$body);
  
Print "Mesage sent!"
?>

                <div class="section7-row-item">
                    <form id="contact-form" action="js/contact.php" method="post">
                        <fieldset>
                            <label for="name"></label>
                            <input type="text" id="name" placeholder="My name is..." name="user_name">
                            <label for="mail"></label>
                            <input type="email" id="mail" placeholder="Please respond at..." name="user_email">
                            <label for="comments"></label>
                            <textarea id="contact-message" name="comments" placeholder="I wanna talk about..." class="form-control input-lg requiredField" rows="5" data-error-empty="Please enter your message"></textarea>
                        </fieldset>                
                        <button class="form-button form-button1" type="submit" data-error-message="Error!" data-sending-message="Sending..." data-ok-message="Message Sent"><i class="fa fa-paper-plane"></i>Send Message</button>   
                    </form>
                </div>