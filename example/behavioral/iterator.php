<?php

$iterator = new Iterator();
$iterator->add('Bonjour');
$iterator->add('Bonjourno');
$iterator->add('Hello');
$iterator->remove('Bonjourno');

echo count($iterator);

foreach ($iterator as $greeting) {
  echo $greeting;
}
