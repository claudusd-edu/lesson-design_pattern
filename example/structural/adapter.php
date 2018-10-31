<?php

interface Waiter
{
  public function serve()
}

class RealWaiter implements Waiter
{
  public function server()
  {
    echo "Take plates"
    echo "Serve plates";
  }
}

class Restaurant
{
  public function employ(Waiter $waiter)
  {
    $waiter->serve();
  }
}

$restaurant = new Restaurant();

$waiter = new Waiter();

$restaurant->employ($waiter);

final class NotWaiter
{
  public function carry()
  {
    echo "Carry a plate";
  }
}




$notWaiter = new NotWaiter();
$restaurant->employ($notWaiter);













class NotWaiterAdapter implements Waiter
{
  private $notWaiter;

  public function __construct(NotWaiter $notWaiter)
  {
    $this->notWaiter = $notWaiter;
  }

  public function serve()
  {
    echo "Help to take plate";
    $this->notWaiter->carry();
  }
}




$notWaiterAdapter = new NotWaiterAdapter($noWaiter);
$restaurant->employ($notWaiterAdapter);
