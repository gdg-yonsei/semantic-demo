export const ButtonSample = `
    // If you wish to use in React / React-Native...

    import { useSemanticColor } from '@gdsc-yonsei/color';

    export default function Button() {
      const { button } = useSemanticColor();

      return (
        <ButtonFrame
          // ...
            backgroundColor={{
              common: button.primary.background.common,
              focused: button.primary.background.active,
              pressed: button.primary.background.pressed,
              loading: button.primary.background.loading,
              disabled: button.primary.background.disabled,
            }}
            labelColor={{
              common: button.primary.label.common,
              focused: button.primary.label.active,
              pressed: button.primary.label.pressed,
              loading: button.primary.label.loading,
              disabled: button.primary.label.disabled,
            }}
        >
          {"Primary"}
        </ButtonFrame>
      )
    }
`;

export const TabbarSample = `
    // If you wish to use in flutter...

    import 'package:flutter/material.dart';
    import 'package:gdsc_ys_color/gdsc_ys_color.dart';

    class MyApp extends StatelessWidget {
      Widget build(BuildContext context) {
        return MaterialApp(
          title: 'GDSC Yonsei Flutter',
          theme: theme.getTheme(),
          home: const MyHomePage(title: 'GDSC Theme Demo'),
        );
      }

      // ...

      ElevatedButton(
        onPressed: _incrementCounter,
        child: Text('button',
            style: TextStyle(
                color: theme.colors.button.primary.label.common)),
        style: ButtonStyle(
          backgroundColor: MaterialStateProperty.all<Color>(
            theme.colors.button.primary.background.common
          ),
        )
      ),
    }

    
`;
