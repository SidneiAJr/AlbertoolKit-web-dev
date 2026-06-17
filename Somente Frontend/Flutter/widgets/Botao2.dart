import 'package:flutter/material.dart';

class Botao2 extends StatelessWidget {
  const Botao2({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
        padding: EdgeInsets.symmetric(horizontal:20,vertical:12),
        decoration: BoxDecoration(
            color: Colors.red,
            borderRadius: BorderRadius.circular(8)
        ),
         child: Text('Hello')
    );
  }
}
