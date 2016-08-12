import {global} from '@angular/core/src/facade/lang';

export class Utils {
	public static reflow(element: any): void {
		new Function('bs', 'return bs')(element.offsetHeight);
	}

	// source: https://github.com/jquery/jquery/blob/master/src/css/var/getStyles.js
	public static getStyles(elem: any): any {
		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		let view = elem.ownerDocument.defaultView;

		if (!view || !view.opener) {
			view = global;
		}

		return view.getComputedStyle(elem);
	}
}