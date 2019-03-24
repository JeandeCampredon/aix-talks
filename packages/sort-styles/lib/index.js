/* eslint-disable */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = _default;

function _default(styleApi) {
  var alias = styleApi.alias,
    and = styleApi.and,
    not = styleApi.not,
    dotSegmentCount = styleApi.dotSegmentCount,
    hasNoMember = styleApi.hasNoMember,
    isAbsoluteModule = styleApi.isAbsoluteModule,
    isNodeModule = styleApi.isNodeModule,
    isScopedModule = styleApi.isScopedModule,
    isRelativeModule = styleApi.isRelativeModule,
    moduleName = styleApi.moduleName,
    unicode = styleApi.unicode; // REACT MODULES

  var reactModuleMap = {
    react: true,
    'prop-types': true,
  };

  var isReactModule = function isReactModule(imported) {
    return !!reactModuleMap[imported.moduleName];
  };

  var reactComparator = function reactComparator(name1) {
    return name1 === 'react' ? -1 : 1;
  }; // STYLING MODULE

  var isStylingModule = function isStylingModule(imported) {
    return !!imported.moduleName.match(/(emotion|polished)/);
  }; // REACT RELATED MODULE

  var isReactRelatedModule = function isReactRelatedModule(imported) {
    return !!imported.moduleName.match(/react/);
  }; // DATA MODULE

  var isDataModule = and(function(imported) {
    return isAbsoluteModule(imported) && !!imported.moduleName.match(/(redux|apollo|graphql)/);
  }, not(hasNoMember)); // App Shortcut MODULE

  var isAppShortcutModule = function isAppShortcutModule(imported) {
    return !!imported.moduleName.match(/^app-/);
  }; // Pure Absolute MODULE

  var isPureAbsoluteModule = and(isAbsoluteModule, not(isScopedModule), not(isAppShortcutModule)); // UTILITY MODULE

  var isUtilityModule = function isUtilityModule(imported) {
    return !!imported.moduleName.match(/(lodash|moment|intl|bower)/);
  }; // WeAssur MODULE

  var isWeassurModule = function isWeassurModule(imported) {
    return !!imported.moduleName.startsWith('@weassur/');
  };

  return [
    // Node Modules
    {
      match: and(isNodeModule, not(hasNoMember)),
      sort: moduleName(unicode),
      sortNamedMembers: alias(unicode),
    },
    {
      separator: true,
    },
    {
      match: and(isNodeModule, hasNoMember),
      sort: moduleName(unicode),
    },
    {
      separator: true,
    }, // react and prop-types
    {
      match: isReactModule,
      sort: moduleName(reactComparator),
      sortNamedMembers: alias(unicode),
    },
    {
      separator: true,
    }, // styling libs
    {
      match: and(isPureAbsoluteModule, isStylingModule, not(hasNoMember)),
      sort: moduleName(unicode),
      sortNamedMembers: alias(unicode),
    },
    {
      separator: true,
    }, // react related modules
    {
      match: and(isPureAbsoluteModule, isReactRelatedModule, not(hasNoMember)),
      sort: moduleName(unicode),
      sortNamedMembers: alias(unicode),
    },
    {
      separator: true,
    }, // data modules
    {
      match: and(isPureAbsoluteModule, isDataModule, not(hasNoMember)),
      sort: moduleName(unicode),
      sortNamedMembers: alias(unicode),
    },
    {
      separator: true,
    }, // utility modules
    {
      match: and(isPureAbsoluteModule, isUtilityModule, not(hasNoMember)),
      sort: moduleName(unicode),
      sortNamedMembers: alias(unicode),
    },
    {
      separator: true,
    }, // absolute modules
    {
      match: and(isPureAbsoluteModule, not(hasNoMember)),
      sort: moduleName(unicode),
      sortNamedMembers: alias(unicode),
    },
    {
      separator: true,
    }, // scoped modules
    {
      match: and(isScopedModule, not(isWeassurModule), not(hasNoMember)),
      sort: moduleName(unicode),
      sortNamedMembers: alias(unicode),
    },
    {
      separator: true,
    }, // weassur modules
    {
      match: and(isWeassurModule, not(hasNoMember)),
      sort: moduleName(unicode),
      sortNamedMembers: alias(unicode),
    },
    {
      separator: true,
    }, // no members absolute
    {
      match: and(isPureAbsoluteModule, hasNoMember),
      sort: moduleName(unicode),
    },
    {
      match: and(isScopedModule, not(isWeassurModule), hasNoMember),
      sort: moduleName(unicode),
    },
    {
      match: and(isWeassurModule, hasNoMember),
      sort: moduleName(unicode),
    },
    {
      separator: true,
    }, // app shortcuts module
    {
      match: and(isAppShortcutModule, not(hasNoMember)),
      sort: moduleName(unicode),
      sortNamedMembers: alias(unicode),
    },
    {
      separator: true,
    },
    {
      match: and(isAppShortcutModule, hasNoMember),
      sort: moduleName(unicode),
    },
    {
      separator: true,
    }, // relative Models
    {
      match: and(isRelativeModule, not(hasNoMember)),
      sort: [dotSegmentCount, moduleName(unicode)],
      sortNamedMembers: alias(unicode),
    },
    {
      separator: true,
    }, // relative Models
    {
      match: isRelativeModule,
      sort: [dotSegmentCount, moduleName(unicode)],
    },
  ];
}
/* eslint-enable */
