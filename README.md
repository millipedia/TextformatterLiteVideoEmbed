# TexformatterLiteVideoEmbed
Processwire Textformatter to replace Youtube and Vimeo links with lite embed placeholders.

It started life as a development of [jacmaes original text formatter](https://github.com/jacmaes/TextformatterLiteYouTubeEmbed) to include Vimeo lite.

This version will write the required javascript inline, so no need to add the lite-youtube/vimeo scripts manually.

At the moment it picks up YouTube links in textareas and plan text inputs, and Vimeo urls in textareas.

If you need to add a nonce to your script because you have a content security policy that requires it (which of course you do) you can set a page variable in _init.php or wherever eg.

    $nonce = base64_encode(random_bytes(20));
    $page->set('nonce', $nonce);

The code needs a lot of tidying but I do have it running on a couple of live sites and it hasn't destroyed them yet.

I will get around to tidying it up and implementing config options etc when I get a chance. Nag me if there's something you need urgently.

s.
