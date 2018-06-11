<?php

class Kitchen
{
  private $state;

  public function __construct(Ready $state)
  {
    $this->state = $state;
  }

  public function setState($state)
  {
    $this->state = $state;
  }

  public function order()
  {
    $this->state->order($this);
  }
}

interface State
{
  public function order(Kitchen $context);
}

class Close implements State
{
  public function order(Kitchen $context)
  {
    echo "Refuse the order";
  }
}

class WarmUp implements State
{
  private $count;

  public function __construct()
  {
    $this->count = 20;
  }

  public function order(Kitchen $context)
  {
    echo "Serve the warm-up order"
    if ($this->count-- == 0) {
      $this->setState(new Close());
    }
  }
}

class Ready implements State
{
  private $count

  public function __construct($count)
  {
    $this->count = $count;
  }

  public function order(Kitchen $context)
  {
    echo "Serve the order"
    if ($this->count-- == 0) {
      $this->setState(new WarmUp());
    }
  }
}


$kitchen = new Kitchen(new Ready(40));
$kitchen->order();
// After 41
$kitchen->order();
//After 21
$kitchen->order();
