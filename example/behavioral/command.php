<?php

interface Command
{
  public function execute();
}

class InternWaiter
{
  public function takeOrder(Command $command)
  {
    $command>execute();
  }
}

class Waiter
{
  private $orders;

  public function __construct()
  {
      $this->orders= [];
  }

  public function takeOrder(Command $command)
  {
      $this->takeOrder[] = $command;
  }

  public function sendOrders()
  {
    foreach ($this->orders as $order) {
      $order->execute();
    }
  }

}

class Kitchen
{
  public function makeSandwich(string $name)
  {
    echo "Make a sandwich";
  }

  public function fillWaterBottle()
  {
      echo "Fill a bottle";
  }
}

class SimpleSandwich implements Command
{
  private $kitchen;

  private $sandwichName;

  public function __construct(Kitchen $kitchen, string $sandwichName)
  {
      $this->kitchen = $kitchen;
      $this->sandwichName = $sandwichName;
  }

  public function execute()
  {
    $this->kitchen->makeSandwich($this->sandwichName);
  }
}

class LunchMenu implements Command
{
  private $kitchen;

  private $sandwichName;

  public function __construct(Kitchen $kitchen, string $sandwichName)
  {
    $this->kitchen = $kitchen;
    $this->sandwichName = $sandwichName;
  }

  public function execute()
  {
    $this->kitchen->fillWaterBottle();
    $this->kitchen->makeSandwich($this->sandwichName);
  }
}


$kitchen = new Kitchen();



$simpleSandwich = new SimpleSandwich($kitchen, 'Cesar');
$lunchMenu = new LunchMenu($kitchen, 'Jupiter');



$internWaiter = new InternWaiter();
$internWaiter->takeOrder($simpleSandwich);
$internWaiter->takeOrder($lunchMenu);



$waiter = new Waiter();
$waiter->takeOrder($simpleSandwich);
$waiter->takeOrder($lunchMenu);
$waiter->sendOrders();
