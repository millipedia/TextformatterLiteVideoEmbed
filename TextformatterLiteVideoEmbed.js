// DEPRECATED
//
// Previously we used file read to get this into our content but now we just 
// have it all in the module function.
//
// will delete this file... soon.
// 
// we set a flag to ensure we only instantiate the elements once
// ... I feel there should be a better way...

if (typeof window.text_formatter_lite_video_embed_scripts_loaded === 'undefined') {

	async function loadYTLite() {

		//TODO set flags just load whichever one we need?
		const LiteYTEmbed = await import(tflve_script_path + '/lite-youtube.js');
		const LiteVimeoEmbed = await import(tflve_script_path + '/lite-vimeo.js');
		
	}

	loadYTLite();

	window.text_formatter_lite_video_embed_scripts_loaded = 1;

}


