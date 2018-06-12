<?php

abstract class WebPage
{
  abstract public function getContent(): string;
}

abstract class About extends WebPage
{
  public function getContent(): string
  {
    return "About";
  }
}

class AboutDark extends WebPage
{
  public function getContent(): string
  {
    return parent::getContent(). ' Dark';
  }
}

class AboutLight extends WebPage
{
  public function getContent(): string
  {
    return parent::getContent(). ' Light';
  }
}

abstract class Index extends WebPage
{
  public function getContent(): string
  {
    return "Index";
  }
}

abstract class IndexDark extends WebPage
{
  public function getContent(): string
  {
    return parent::getContent(). ' Dark';
  }
}

class IndexLight extends WebPage
{
  public function getContent(): string
  {
    return parent::getContent(). ' Light';
  }
}



//Or



interface Theme
{
  public function getColor(): string;
}

class DarkTheme implements Theme
{
  public function getColor(): string
  {
    return 'Dark';
  }
}

class LightTheme implements Theme
{
  public function getColor(): string
  {
    return 'Light';
  }
}


abstract WebPageWithTheme implements Webpage
{
  private $theme;

  public function __construct(Theme $theme)
  {
      $this->theme = $theme;
  }

  abstract public function getContent(): string
}

class About extends WebPageWithTheme
{
  public function getContent(): string
  {
    return "About page in ".$this->theme->getColor();
  }
}

class Index extends WebPageWithTheme
{
  public function getContent(): string
  {
    return "About page in ".$this->theme->getColor();
  }
}
