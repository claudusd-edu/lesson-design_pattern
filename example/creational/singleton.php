<?php

class Founder {

  private static $instance;

  private function __construct()
  {

  }

  public static function getInstance(): Founder
  {
    if (!self::$instance) {
      self::$instance = new self();
    }

    return self::$instance;
  }
}

$founder1 = Founder::getInstance();
$founder2 = Founder::getInstance();

$founder1 === $founder2;
