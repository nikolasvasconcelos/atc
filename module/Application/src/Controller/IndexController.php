<?php
/**
 * @link      http://github.com/zendframework/ZendSkeletonApplication for the canonical source repository
 * @copyright Copyright (c) 2005-2016 Zend Technologies USA Inc. (http://www.zend.com)
 * @license   http://framework.zend.com/license/new-bsd New BSD License
 */

namespace Application\Controller;

use Zend\Http\Request;
use Zend\Http\Response;
use Zend\Http\Client;
use Zend\Mvc\Controller\AbstractRestfulController;
use Zend\View\Model\JsonModel;

class IndexController extends AbstractRestfulController
{
    public function indexAction()
    {
        $page = $this->params()->fromQuery("page");
        
        $request = new Request();
        $request->setUri("https://api.themoviedb.org/3/movie/upcoming?api_key=1f54bd990f1cdfb230adb312546d765d&language=en-US&page={$page}");
        $request->getHeaders()->addHeaders([
            'Content-Type' => 'application/json',
            'Content-Type' => 'charset=utf-8'
        ]);
        
        $client = new Client();
        $result = $client->send($request);

        //$this->_helper->layout->disableLayout();
        //$this->_helper->viewRenderer->setNoRender(TRUE);

        $response = new Response();
        $response->setStatusCode(200);
        $response->getHeaders()->addHeaders(array('Content-type' => 'application/json'));
        $response->setContent($result->getBody());

        return $response;
    }
}
