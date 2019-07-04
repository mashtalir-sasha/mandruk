<?
	if(isset ($_POST['title'])) {$title=$_POST['title'];}
	if(isset ($_POST['name'])) {$fio=$_POST['name'];}
	if(isset ($_POST['phone'])) {$phonenum=$_POST['phone'];}

	if(isset ($_POST['step1'])) {$step1=$_POST['step1'];}
	if(isset ($_POST['checkbox'])) {
		foreach ( $_POST['checkbox'] as $key => $value ) {
			$checkbox .= "$value,\n";
		}
	}
	if(isset ($_POST['step3'])) {$step3=$_POST['step3'];}
	if(isset ($_POST['step4'])) {$step4=$_POST['step4'];}

	$to = "d.o.dikaya@gmail.com"; // Замениь на емаил клиента

	$message = "Форма: $title <br><br>";
	if ( $fio || $phonenum || $step1 || $checkbox || $step3 || $step4 ) {
		$message .= ""
			. ( $fio ?" Імя:  $fio <br>" : "")
			. ( $phonenum ?" Телефон:  $phonenum <br><br>" : "")
			. ( $step1  ? " Вкажіть дату народження Вашої дитини?: $step1 <br>" : "")
			. ( $checkbox  ? "На що Ви більше всього звертаєте увагу при виборі навчального закладу для Вашої дитини?: $checkbox <br>" : "")
			. ( $step3  ? " Ваша дитина вже ходила в дитячий садочок?: $step3 <br>" : "")
			. ( $step4  ? " Який графік перебування у дитячому садку Вам зручніше і більше підійде для дитини?: $step4 <br>" : "");
	}

	$headers = "MIME-Version: 1.0\r\n";
	$headers .= "Content-type: text/html; charset=UTF-8\r\n";
	$headers .= "From: no-reply@mywaypreschool.com"; // Заменить домен на домен клиента

	if (!$title && !$phonenum) {
	} else {
		mail($to,"New lead(quiz.mywaypreschool.com)",$message,$headers); // Заменить домен на домен клиента
	}
?>