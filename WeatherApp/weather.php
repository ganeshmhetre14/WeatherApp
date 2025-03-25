<?php
header('Content-Type: application/json');

$api_key = '22fde6889b2947a5ceed553e8c55942c'; 
$city = isset($_GET['city']) ? $_GET['city'] : 'London';

function getWeatherData($city, $api_key) {
    $url = "https://api.openweathermap.org/data/2.5/weather?q=" . urlencode($city) . "&appid=" . $api_key . "&units=metric";
    
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($ch);
    curl_close($ch);
    
    return $response;
}

echo getWeatherData($city, $api_key);
?>