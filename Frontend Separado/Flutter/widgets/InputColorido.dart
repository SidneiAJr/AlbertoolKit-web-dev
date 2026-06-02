import 'package:flutter/material.dart';

class Input extends StatelessWidget {
  final String? label;           // texto que fica em cima (ex: "Nome")
  final String? hint;            // texto dentro do campo (ex: "Digite seu nome")
  final TextEditingController? controller;  // controla o valor
  final bool obscureText;        // true para senha
  final TextInputType keyboardType;  // tipo de teclado (email, number, etc.)

  const Input({
    super.key,
    this.label,
    this.hint,
    this.controller,
    this.obscureText = false,
    this.keyboardType = TextInputType.text,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        if (label != null) ...[
          Text(
            label!,
            style: const TextStyle(
              fontWeight: FontWeight.bold,
              fontSize: 14,
            ),
          ),
          const SizedBox(height: 5),
        ],
        TextField(
          controller: controller,
          obscureText: obscureText,
          keyboardType: keyboardType,
          decoration: InputDecoration(
            hintText: hint,
            border: OutlineInputBorder(
              borderRadius: BorderRadius.circular(8),
            ),
            filled: true,
            fillColor: Colors.black[50],
            contentPadding: const EdgeInsets.symmetric(
              horizontal: 15,
              vertical: 15,
            ),
          ),
        ),
      ],
    );
  }
}
