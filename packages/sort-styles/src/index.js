export default function(styleApi) {
  const {
    alias,
    and,
    not,
    dotSegmentCount,
    hasNoMember,
    isAbsoluteModule,
    isNodeModule,
    isScopedModule,
    isRelativeModule,
    moduleName,
    unicode,
  } = styleApi;

  // REACT MODULES
  const reactModuleMap = {
    react: true,
    'prop-types': true,
  };
  const isReactModule = imported => !!reactModuleMap[imported.moduleName];
  const reactComparator = name1 => (name1 === 'react' ? -1 : 1);

  // STYLING MODULE
  const isStylingModule = imported => !!imported.moduleName.match(/(emotion|polished)/);

  // REACT RELATED MODULE
  const isReactRelatedModule = imported => !!imported.moduleName.match(/react/);

  // DATA MODULE
  const isDataModule = and(
    imported => isAbsoluteModule(imported) && !!imported.moduleName.match(/(redux|apollo|graphql)/),
    not(hasNoMember),
  );

  // App Shortcut MODULE
  const isAppShortcutModule = imported => !!imported.moduleName.match(/^app-/);

  // Pure Absolute MODULE
  const isPureAbsoluteModule = and(isAbsoluteModule, not(isScopedModule), not(isAppShortcutModule));

  // UTILITY MODULE
  const isUtilityModule = imported => !!imported.moduleName.match(/(lodash|moment|intl|bower)/);

  // WeAssur MODULE
  const isWeassurModule = imported => !!imported.moduleName.startsWith('@weassur/');

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
    },

    // react and prop-types
    {
      match: isReactModule,
      sort: moduleName(reactComparator),
      sortNamedMembers: alias(unicode),
    },
    {
      separator: true,
    },

    // styling libs
    {
      match: and(isPureAbsoluteModule, isStylingModule, not(hasNoMember)),
      sort: moduleName(unicode),
      sortNamedMembers: alias(unicode),
    },
    {
      separator: true,
    },

    // react related modules
    {
      match: and(isPureAbsoluteModule, isReactRelatedModule, not(hasNoMember)),
      sort: moduleName(unicode),
      sortNamedMembers: alias(unicode),
    },
    {
      separator: true,
    },

    // data modules
    {
      match: and(isPureAbsoluteModule, isDataModule, not(hasNoMember)),
      sort: moduleName(unicode),
      sortNamedMembers: alias(unicode),
    },
    {
      separator: true,
    },

    // utility modules
    {
      match: and(isPureAbsoluteModule, isUtilityModule, not(hasNoMember)),
      sort: moduleName(unicode),
      sortNamedMembers: alias(unicode),
    },
    {
      separator: true,
    },

    // absolute modules
    {
      match: and(isPureAbsoluteModule, not(hasNoMember)),
      sort: moduleName(unicode),
      sortNamedMembers: alias(unicode),
    },
    {
      separator: true,
    },

    // scoped modules
    {
      match: and(isScopedModule, not(isWeassurModule), not(hasNoMember)),
      sort: moduleName(unicode),
      sortNamedMembers: alias(unicode),
    },
    {
      separator: true,
    },

    // weassur modules
    {
      match: and(isWeassurModule, not(hasNoMember)),
      sort: moduleName(unicode),
      sortNamedMembers: alias(unicode),
    },
    {
      separator: true,
    },

    // no members absolute
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
    },

    // app shortcuts module
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
    },

    // relative Models
    {
      match: and(isRelativeModule, not(hasNoMember)),
      sort: [dotSegmentCount, moduleName(unicode)],
      sortNamedMembers: alias(unicode),
    },
    {
      separator: true,
    },
    // relative Models
    {
      match: isRelativeModule,
      sort: [dotSegmentCount, moduleName(unicode)],
    },
  ];
}
