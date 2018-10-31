<?php

class Napoleon
{
  private $stategy;

  public function __construct(WarStrategy $strategy)
  {
    $this->strategy = new Offensive();
  }

  public function setStrategy(WarStrategy $strategy)
  {
    $this->strategy = $strategy;
  }

  public function attack(Enemy $enemy)
  {
    $this->strategy->attack($enemy);
  }
}

interface WarStrategy
{
  public function attack(Enemy $enemy): bool;
}

class Offensive implements WarStrategy
{
  public function attack(Enemy $enemy): bool
  {
    // Do a offensive strategy
  }
}

class Defensive implements WarStrategy
{
  public function attack(Enemy $enemy): bool
  {
    // Do a defensive strategy
  }
}

$emperor = new Napoleon();

// Austerlitz
echo $emperor->attack(new Enemy());
// Waterloo
$emperor->setStrategy(new Defensive());
echo $emperor->attack(new Enemy());






//
