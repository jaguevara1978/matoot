<?php
/*
*	Simple Send Form
*
*/
require_once( 'mailer/class.phpmailer.php' );

$formType = $_POST[ 'formType' ];

if ( $formType == 'newsletter' ) {
    $name = 'no-name';
    $email = $_POST['email'];
    $subject = 'newsletter';
    $user_message = 'subscribe-me';
} else {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $user_message = $_POST['message'];
}

$to = 'info@matoot.com';

$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf8' . "\r\n";

$headers .= 'Reply-To: ' . $name . ' <' . $email . '>' . "\r\n";
$headers .= 'Return-Path: ' . $name . ' <' . $email . '>' . "\r\n";
$headers .= 'From: ' . $name . ' <' . $email . '>' . "\r\n";

$message = '
	<html>
		<head>
			<title>Email from Website</title>
		</head>
		<body bgcolor="#ffffff" leftmargin=0 topmargin=0 marginwidth=0 marginheight=0>
			<table width="85%" border=0 align="center" cellpadding=0 cellspacing=0>
				<tr>
					<td style="padding:50px; border:1px solid #aaaaaa;">
						<div align="center">' . $subject . '</div>
						<br />
						<table cellpadding="10" cellspacing="10" valign="top" width="95%" border="0">
							<tr>
								<td width="50%" align="right"><b>Name</b></td>
								<td width="50%" align="left">' . $name . '</td>
							</tr>
							<tr>
								<td width="50%" align="right"><b>Email</b></td>
								<td width="50%" align="left">' . $email . '</td>
							</tr>
							<tr>
								<td width="50%" align="right"><b>Message</b></td>
								<td width="50%" align="left">' . $user_message . '</td>
							</tr>
						</table>
					</td>
				</tr>
			</table>
		</body>
	</html>
	';

	if ( empty( $name ) ) {
		echo "failed-name";
	} elseif ( !filter_var($email, FILTER_VALIDATE_EMAIL) ) {
		echo "failed-email";
	} else {
    	//PHPMailer Objec;
        $mail = new PHPMailer;
        //Set PHPMailer to use SMTP.
        $mail->isSMTP();
        //Send HTML or Plain Text email
        $mail->isHTML( false );
        if ( !$subject ) $subject = 'Matoot website contact form';
        $mail->Subject = $subject;
        //Set SMTP host name
        $mail->Host = "mail.matoot.com";
        //Set this to true if SMTP host requires authentication to send email
        $mail->SMTPAuth = true;
        //Provide username and password
        $mail->Username = "admin@matoot.com";
        $mail->Password = "admin2015";
        //If SMTP requires TLS encryption then set it
        $mail->SMTPSecure = "tls";
        //Set TCP port to connect to
        $mail->Port = 587; //or 25

        //From email address and name
        $mail->From = "admin@matoot.com";
        $mail->FromName = "Matoot Contact Form";        

        //To address and name
        $mail->addAddress( $to, 'Matoot Website Admin' );

        $mail->MsgHTML( $message );
        $mail->AltBody = 'Name: '.$name.' - E-Mail: '.$email.' - Subject: '.$subject.' - Message: '. $user_message;

        if ( !$mail->send( ) ) {
            echo "Mailer Error: " . $mail->ErrorInfo;
			echo "failed";
         } else {
			echo "sent";
         }
/*
		$mailsent = mail($to, $subject, $message, $headers);
		if ($mailsent) {
			echo "sent";
		} else {
			echo "failed";
		}
*/
	}

?>