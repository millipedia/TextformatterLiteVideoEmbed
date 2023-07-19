# TextformatterLiteVideoEmbed
Processwire Textformatter to replace Youtube and Vimeo links with lite embed placeholders.

It started life as a development of [jacmaes original text formatter](https://github.com/jacmaes/TextformatterLiteYouTubeEmbed) to include Vimeo lite.

This version will write the required javascript inline, so no need to add the lite-youtube/vimeo scripts manually.

It will detect YouTube and Vimeo links in both textareas and plain text inputs.

If you need to add a nonce to your script because you have a content security policy that requires it (which of course you do) you can set a page variable in _init.php or wherever eg.

    $nonce = base64_encode(random_bytes(20));
    $page->set('nonce', $nonce);

There are configuration settings to style the colours of the placeholder play buttons. 

s.
