<?php

interface Same
{
  public function same();
}

class Sandwich implements Same
{
  private $meat;

  public function __construct(string $meat)
  {
    $this->meat = $meat;
  }

  public function getMeat(): string
  {
    return $this->meat;
  }

  public function setMeat(string $meat)
  {
      $this->meat = $meat;
  }

  public function same()
  {
    return new Sandwich($this->meat);
  }
}

$sandwich = new Sandwich('Ham');
echo $sandwich->getMeat();
$sandwich2 = $sandwich->same();
echo $sandwich2->getMeat();
$sandwich2->setMeat('Chicken');
$sandwich === $sandwich2;
echo $sandwich->getMeat();

$sandwich = new Sandwich('Ham');
echo $sandwich->getMeat();
$sandwich2 = clone $sandwich;
echo $sandwich2->getMeat();
$sandwich2->setMeat('Chicken');
$sandwich === $sandwich2;
echo $sandwich->getMeat();
