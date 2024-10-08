# TextformatterLiteVideoEmbed
Processwire Textformatter to replace Youtube and Vimeo links with lite embed placeholders.

It started life as a development of [jacmaes original text formatter](https://github.com/jacmaes/TextformatterLiteYouTubeEmbed) to include Vimeo lite.

This version will write the required javascript inline, so no need to add the lite-youtube/vimeo scripts manually.

It will detect YouTube and Vimeo links in both textareas and plain text inputs.

If you need to add a nonce to your script because you have a content security policy that requires it (which of course you do) you can set a page variable in _init.php or wherever eg.

    $nonce = base64_encode(random_bytes(20));
    $page->set('nonce', $nonce);

There are configuration settings to style the colours of the placeholder play buttons.

For YouTube at least, you can pass an image location using a *thumbnail* parameter (jpeg only at the mo) then we'll use that instead of pulling the thumbail from YouTube.
You can pass a start value in seconds in the same way:

	https://www.youtube.com/watch?v=wk_Dh0XE-bU&thumbnail=/site/assets/files/5865/cooper.jpg&start=10

It finally has its own thread on the PW forums now at https://processwire.com/talk/topic/28820-textformatterlitevideoembed/

s.
