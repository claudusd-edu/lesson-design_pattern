<?php

class Cooking
{
  final public function cook()
  {
    $this->prepare();
    $this->doRecipe();
    $this->bake();
    $this->setPlate();
  }

  abstract protected function prepare();

  abstract protected function doRecipe();

  abstract protected function bake();

  abstract protected function setPlate();
}

class Sandwich extends Cooking
{
  protected function prepare()
  {
      echo "Prepare bread, butter and ham";
  }

  protected function doRecipe()
  {
      echo "Cut bread";
      echo "Spred the butter";
      echo "Put the ham";
  }

  protected function bake()
  {
      echo "Warm up";
  }

  protected function setPlate()
  {
    echo "Put in the bag";
  }
}

$sandwich = new Sandwich();
$sandwich->cook();
