<?php
namespace Craft;

class StripPPlugin extends BasePlugin
{
    function getName()
    {
         return Craft::t('Strip Paragraph Tags');
    }

    function getVersion()
    {
        return '1.0.0';
    }

    function getDeveloper()
    {
        return 'Mark Huot';
    }

    function getDeveloperUrl()
    {
        return 'http://www.markhuot.com';
    }

    public function addTwigExtension()
    {
        Craft::import('plugins.stripp.twigextensions.StripPTwigExtension');
        return new StripPTwigExtension();
    }
}
