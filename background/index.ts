import { beforeNaviCallback, beforeNaviFilters } from './helper';

chrome.webNavigation.onBeforeNavigate.addListener(beforeNaviCallback, beforeNaviFilters)
