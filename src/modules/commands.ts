export const commands = {
    TRANSITION_FADE: ["/show/transition", "fade"],
    TRANSITION_DIP: ["/show/transition", "dip"],
    TRANSITION_DIP_DATA: ["/show/transition_data", "dipBlack"],
	TRANSITION_WIPE_1: ["/show/transition", "wipe"],
    TRANSITION_WIPE_1_DATA: ["/show/transition_data", "diagonal_1"],
    TRANSITION_WIPE_2: ["/show/transition", "wipe"],
    TRANSITION_WIPE_2_DATA: ["/show/transition_data", "diagonal_2"],
    TRANSITION_WIPE_3: ["/show/transition", "wipe"],
    TRANSITION_WIPE_3_DATA: ["/show/transition_data", "leftright"],
    TRANSITION_WIPE_4: ["/show/transition", "wipe"],
    TRANSITION_WIPE_4_DATA: ["/show/transition_data", "top_bottom"],
    TRANSITION_WIPE_5: ["/show/transition", "wipe"],
    TRANSITION_WIPE_5_DATA: ["/show/transition_data", "box_tl"],
    TRANSITION_WIPE_6: ["/show/transition", "wipe"],
    TRANSITION_WIPE_6_DATA: ["/show/transition_data", "box_tr"],
    TRANSITION_WIPE_7: ["/show/transition", "wipe"],
    TRANSITION_WIPE_7_DATA: ["/show/transition_data", "box_br"],
    TRANSITION_WIPE_8: ["/show/transition", "wipe"],
    TRANSITION_WIPE_8_DATA: ["/show/transition_data", "box_bl"],
	TRANSITION_WIPE_9: ["/show/transition", "wipe"],
    TRANSITION_WIPE_9_DATA: ["/show/transition_data", "corners"],
    TRANSITION_WIPE_10: ["/show/transition", "wipe"],
    TRANSITION_WIPE_10_DATA: ["/show/transition_data", "barndoor-v"],
    TRANSITION_WIPE_11: ["/show/transition", "wipe"],
    TRANSITION_WIPE_11_DATA: ["/show/transition_data", "barndoor-h"],
	TRANSITION_MIRROR: ["/show/invert_wipe"],
    TRANSITION_TIME: ["/show/transition_time"],

    BUTTON_1: ["/device/button", 1, 1],
    BUTTON_2: ["/device/button", 2, 1],
    BUTTON_3: ["/device/button", 3, 1],
    BUTTON_4: ["/device/button", 4, 1],
    BUTTON_5: ["/device/button", 5, 1],
    BUTTON_6: ["/device/button", 6, 1],
    BUTTON_7: ["/device/button", 7, 1],
    BUTTON_8: ["/device/button", 8, 1],
    BUTTON_9: ["/device/button", 9, 1],
    BUTTON_10: ["/device/button", 10, 1],
    BUTTON_11: ["/device/button", 11, 1],
    BUTTON_12: ["/device/button", 12, 1],
    BUTTON_13: ["/device/button", 13, 1],
    BUTTON_14: ["/device/button", 14, 1],

	INPUT_1: ["/device/input", 1],
	INPUT_2: ["/device/input", 2],
	INPUT_3: ["/device/input", 3],
	INPUT_4: ["/device/input", 4],
	INPUT_5: ["/device/input", 5],
	INPUT_6: ["/device/input", 6],
	INPUT_7: ["/device/input", 7],
	SCENE_1: ["/device/scene", 1],
	SCENE_2: ["/device/scene", 2],
	SCENE_3: ["/device/scene", 3],
	SCENE_4: ["/device/scene", 4],
	SCENE_5: ["/device/scene", 5],
	SCENE_6: ["/device/scene", 6],
	SCENE_7: ["/device/scene", 7],
	MEDIA_1: ["/device/media", 1],
	MEDIA_2: ["/device/media", 2],
	MEDIA_3: ["/device/media", 3],
	MEDIA_4: ["/device/media", 4],
	MEDIA_5: ["/device/media", 5],
	MEDIA_6: ["/device/media", 6],
	MEDIA_7: ["/device/media", 7],
	OVERLAY_1: ["/device/toggleOverlay", 1],
	OVERLAY_2: ["/device/toggleOverlay", 2],
	OVERLAY_3: ["/device/toggleOverlay", 3],
	OVERLAY_4: ["/device/toggleOverlay", 4],
	OVERLAY_5: ["/device/toggleOverlay", 5],
	OVERLAY_6: ["/device/toggleOverlay", 6],
	OVERLAY_7: ["/device/toggleOverlay", 7],

    AUTO_BUTTON: ["/device/button", 106, 1],  // 0x6a is 106 in decimal
    CUT_BUTTON: ["/device/button", 105, 1],   // 0x69 is 105 in decimal
	CUT_BUTTON_DIRECT: ["/actionCut", 1],
	AUTO_BUTTON_DIRECT: ["/actionAuto", 1],

    MEDIA_BUTTON: ["/device/button", 101, 1],    // 0x65 is 101 in decimal
    OVERLAY_BUTTON: ["/device/button", 102, 1],  // 0x66 is 102 in decimal
    MULTISOURCE_BUTTON: ["/device/button", 103, 1], // 0x67 is 103 in decimal
	KEY_BUTTON: ["/device/button", 104, 1],    // 0x68 is 104 in decimal
    INSPECT_BUTTON: ["/device/button", 108, 1],    // 0x6c is 108 in decimal

    START_RECORD: ["/show/record", 1],
    STOP_RECORD: ["/show/record", 0],
    START_STREAM: ["/show/live", 1],
    STOP_STREAM: ["/show/live", 0],

    REMOTE: ["/remote"],
    REFRESH: ["/device/refresh"],
	SHOW: ["/show"],
	DEVICE: ["/device"],

	VOL_MON: ["/device/encoderChange", 2],
	CHANGE_MON: ["/device/button", 110],
	HP1_VOL: ["/device/HP1_VOL"],
	HP2_VOL: ["/device/HP2_VOL"],
	MON_VOL: ["/device/MON_VOL"],

	SHOW_LOGO_DISABLE: ["/show/logoEnable", 0],
	SHOW_LOGO_ENABLE: ["/show/logoEnable", 1],
	AUTOSWITCH_DISABLE: ["/auto_switching/enabled", 0],
	AUTOSWITCH_ENABLE: ["/auto_switching/enabled", 1],

	AUDIO_DELAY: ["/masterAudioProcessing/delay/value_ms"],

	FRAMERATE_23: ["/show/frameRate", 23],
	FRAMERATE_24: ["/show/frameRate", 24],
	FRAMERATE_25: ["/show/frameRate", 25],
	FRAMERATE_29: ["/show/frameRate", 29],
	FRAMERATE_30: ["/show/frameRate", 30],
	FRAMERATE_50: ["/show/frameRate", 50],
	FRAMERATE_59: ["/show/frameRate", 59],
	FRAMERATE_60: ["/show/frameRate", 60],

	HDMI_A_OUTPUT: ["/show/hdmiOut/2"],
	HDMI_B_OUTPUT: ["/show/hdmiOut/1"],
	UVC_1_OUTPUT: ["/show/usbOut/1"],

	METERS: ["/meters/masks"],
};
