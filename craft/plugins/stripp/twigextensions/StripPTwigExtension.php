<?php
namespace Craft;

use Twig_Extension;
use Twig_Filter_Method;

class StripPTwigExtension extends Twig_Extension
{

    public function getName() {
        return 'stripP';
    }

    public function getFilters() {
        return array(
            'stripP' => new Twig_Filter_Method($this, 'stripP'),
        );
    }

    public function stripP($content)
    {
        $content = preg_replace('/(<p>|<\/p>)/i', '', (string)trim($content));
        $content = preg_replace('/<br(\s)?(\/)?>/i', '', (string)trim($content));
        return TemplateHelper::getRaw($content);
    }
}